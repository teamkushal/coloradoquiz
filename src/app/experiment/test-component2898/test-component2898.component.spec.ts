import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2898Component } from './test-component2898.component';

describe('TestComponent2898Component', () => {
  let component: TestComponent2898Component;
  let fixture: ComponentFixture<TestComponent2898Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2898Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
