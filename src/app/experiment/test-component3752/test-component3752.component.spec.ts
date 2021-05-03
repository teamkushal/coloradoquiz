import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3752Component } from './test-component3752.component';

describe('TestComponent3752Component', () => {
  let component: TestComponent3752Component;
  let fixture: ComponentFixture<TestComponent3752Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3752Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
