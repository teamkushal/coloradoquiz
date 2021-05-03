import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3855Component } from './test-component3855.component';

describe('TestComponent3855Component', () => {
  let component: TestComponent3855Component;
  let fixture: ComponentFixture<TestComponent3855Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3855Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
