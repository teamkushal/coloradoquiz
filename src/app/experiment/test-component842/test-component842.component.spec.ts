import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent842Component } from './test-component842.component';

describe('TestComponent842Component', () => {
  let component: TestComponent842Component;
  let fixture: ComponentFixture<TestComponent842Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent842Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent842Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
