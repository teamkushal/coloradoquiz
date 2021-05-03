import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent13Component } from './test-component13.component';

describe('TestComponent13Component', () => {
  let component: TestComponent13Component;
  let fixture: ComponentFixture<TestComponent13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
