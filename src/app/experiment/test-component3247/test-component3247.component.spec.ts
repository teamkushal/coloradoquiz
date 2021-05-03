import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3247Component } from './test-component3247.component';

describe('TestComponent3247Component', () => {
  let component: TestComponent3247Component;
  let fixture: ComponentFixture<TestComponent3247Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3247Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
