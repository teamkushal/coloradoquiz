import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3420Component } from './test-component3420.component';

describe('TestComponent3420Component', () => {
  let component: TestComponent3420Component;
  let fixture: ComponentFixture<TestComponent3420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3420Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
