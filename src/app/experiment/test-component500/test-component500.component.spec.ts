import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent500Component } from './test-component500.component';

describe('TestComponent500Component', () => {
  let component: TestComponent500Component;
  let fixture: ComponentFixture<TestComponent500Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent500Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
