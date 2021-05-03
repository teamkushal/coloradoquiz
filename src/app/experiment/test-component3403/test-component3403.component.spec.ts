import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3403Component } from './test-component3403.component';

describe('TestComponent3403Component', () => {
  let component: TestComponent3403Component;
  let fixture: ComponentFixture<TestComponent3403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3403Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
