import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2788Component } from './test-component2788.component';

describe('TestComponent2788Component', () => {
  let component: TestComponent2788Component;
  let fixture: ComponentFixture<TestComponent2788Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2788Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
