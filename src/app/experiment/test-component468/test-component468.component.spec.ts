import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent468Component } from './test-component468.component';

describe('TestComponent468Component', () => {
  let component: TestComponent468Component;
  let fixture: ComponentFixture<TestComponent468Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent468Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
