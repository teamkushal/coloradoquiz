import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent898Component } from './test-component898.component';

describe('TestComponent898Component', () => {
  let component: TestComponent898Component;
  let fixture: ComponentFixture<TestComponent898Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent898Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
