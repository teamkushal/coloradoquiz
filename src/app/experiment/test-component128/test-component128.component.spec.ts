import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent128Component } from './test-component128.component';

describe('TestComponent128Component', () => {
  let component: TestComponent128Component;
  let fixture: ComponentFixture<TestComponent128Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent128Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
