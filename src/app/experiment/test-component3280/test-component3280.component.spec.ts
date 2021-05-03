import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3280Component } from './test-component3280.component';

describe('TestComponent3280Component', () => {
  let component: TestComponent3280Component;
  let fixture: ComponentFixture<TestComponent3280Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3280Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
