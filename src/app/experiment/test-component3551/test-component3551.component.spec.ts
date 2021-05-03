import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3551Component } from './test-component3551.component';

describe('TestComponent3551Component', () => {
  let component: TestComponent3551Component;
  let fixture: ComponentFixture<TestComponent3551Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3551Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
