import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2280Component } from './test-component2280.component';

describe('TestComponent2280Component', () => {
  let component: TestComponent2280Component;
  let fixture: ComponentFixture<TestComponent2280Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2280Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
