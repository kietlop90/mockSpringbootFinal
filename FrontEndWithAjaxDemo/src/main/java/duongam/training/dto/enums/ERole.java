package duongam.training.dto.enums;

public enum ERole {
    TRAINER("TRAINER"), ADMIN("ADMIN"),SUPER_ADMIN("SUPER_ADMIN");
    private final String text;

    private ERole(final String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return text;
    }
}
