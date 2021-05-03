import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent829Component } from './test-component829.component';

describe('TestComponent829Component', () => {
  let component: TestComponent829Component;
  let fixture: ComponentFixture<TestComponent829Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent829Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
