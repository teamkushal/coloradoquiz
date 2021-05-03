import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent133Component } from './test-component133.component';

describe('TestComponent133Component', () => {
  let component: TestComponent133Component;
  let fixture: ComponentFixture<TestComponent133Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent133Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent133Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
