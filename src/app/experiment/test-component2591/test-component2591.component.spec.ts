import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2591Component } from './test-component2591.component';

describe('TestComponent2591Component', () => {
  let component: TestComponent2591Component;
  let fixture: ComponentFixture<TestComponent2591Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2591Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
