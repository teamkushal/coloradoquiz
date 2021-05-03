import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2337Component } from './test-component2337.component';

describe('TestComponent2337Component', () => {
  let component: TestComponent2337Component;
  let fixture: ComponentFixture<TestComponent2337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2337Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
