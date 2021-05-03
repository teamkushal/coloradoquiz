import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2713Component } from './test-component2713.component';

describe('TestComponent2713Component', () => {
  let component: TestComponent2713Component;
  let fixture: ComponentFixture<TestComponent2713Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2713Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
