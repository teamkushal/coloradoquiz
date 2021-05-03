import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2058Component } from './test-component2058.component';

describe('TestComponent2058Component', () => {
  let component: TestComponent2058Component;
  let fixture: ComponentFixture<TestComponent2058Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2058Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
