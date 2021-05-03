import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2133Component } from './test-component2133.component';

describe('TestComponent2133Component', () => {
  let component: TestComponent2133Component;
  let fixture: ComponentFixture<TestComponent2133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
