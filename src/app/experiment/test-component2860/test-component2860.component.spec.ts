import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2860Component } from './test-component2860.component';

describe('TestComponent2860Component', () => {
  let component: TestComponent2860Component;
  let fixture: ComponentFixture<TestComponent2860Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2860Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
