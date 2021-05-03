import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent640Component } from './test-component640.component';

describe('TestComponent640Component', () => {
  let component: TestComponent640Component;
  let fixture: ComponentFixture<TestComponent640Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent640Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
