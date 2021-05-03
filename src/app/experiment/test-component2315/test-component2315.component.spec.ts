import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2315Component } from './test-component2315.component';

describe('TestComponent2315Component', () => {
  let component: TestComponent2315Component;
  let fixture: ComponentFixture<TestComponent2315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2315Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
