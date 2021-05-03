import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2363Component } from './test-component2363.component';

describe('TestComponent2363Component', () => {
  let component: TestComponent2363Component;
  let fixture: ComponentFixture<TestComponent2363Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2363Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2363Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
