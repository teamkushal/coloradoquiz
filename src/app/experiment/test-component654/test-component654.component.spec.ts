import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent654Component } from './test-component654.component';

describe('TestComponent654Component', () => {
  let component: TestComponent654Component;
  let fixture: ComponentFixture<TestComponent654Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent654Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
