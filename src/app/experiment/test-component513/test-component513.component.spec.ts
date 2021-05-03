import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent513Component } from './test-component513.component';

describe('TestComponent513Component', () => {
  let component: TestComponent513Component;
  let fixture: ComponentFixture<TestComponent513Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent513Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
