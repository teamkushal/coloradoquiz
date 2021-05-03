import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3027Component } from './test-component3027.component';

describe('TestComponent3027Component', () => {
  let component: TestComponent3027Component;
  let fixture: ComponentFixture<TestComponent3027Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3027Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
