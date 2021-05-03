import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3667Component } from './test-component3667.component';

describe('TestComponent3667Component', () => {
  let component: TestComponent3667Component;
  let fixture: ComponentFixture<TestComponent3667Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3667Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
