import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3489Component } from './test-component3489.component';

describe('TestComponent3489Component', () => {
  let component: TestComponent3489Component;
  let fixture: ComponentFixture<TestComponent3489Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3489Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
