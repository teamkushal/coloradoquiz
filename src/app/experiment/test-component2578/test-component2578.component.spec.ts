import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2578Component } from './test-component2578.component';

describe('TestComponent2578Component', () => {
  let component: TestComponent2578Component;
  let fixture: ComponentFixture<TestComponent2578Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2578Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
