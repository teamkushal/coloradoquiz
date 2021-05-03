import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3969Component } from './test-component3969.component';

describe('TestComponent3969Component', () => {
  let component: TestComponent3969Component;
  let fixture: ComponentFixture<TestComponent3969Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3969Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
