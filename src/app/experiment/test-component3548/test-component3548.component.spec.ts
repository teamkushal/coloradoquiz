import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3548Component } from './test-component3548.component';

describe('TestComponent3548Component', () => {
  let component: TestComponent3548Component;
  let fixture: ComponentFixture<TestComponent3548Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3548Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
