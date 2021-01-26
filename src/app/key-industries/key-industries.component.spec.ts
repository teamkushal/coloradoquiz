import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyIndustriesComponent } from './key-industries.component';

describe('KeyIndustriesComponent', () => {
  let component: KeyIndustriesComponent;
  let fixture: ComponentFixture<KeyIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyIndustriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
