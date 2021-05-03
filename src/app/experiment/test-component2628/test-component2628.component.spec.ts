import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2628Component } from './test-component2628.component';

describe('TestComponent2628Component', () => {
  let component: TestComponent2628Component;
  let fixture: ComponentFixture<TestComponent2628Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2628Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
