import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2884Component } from './test-component2884.component';

describe('TestComponent2884Component', () => {
  let component: TestComponent2884Component;
  let fixture: ComponentFixture<TestComponent2884Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2884Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
