import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3442Component } from './test-component3442.component';

describe('TestComponent3442Component', () => {
  let component: TestComponent3442Component;
  let fixture: ComponentFixture<TestComponent3442Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3442Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3442Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
