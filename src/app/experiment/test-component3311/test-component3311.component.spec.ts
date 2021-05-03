import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3311Component } from './test-component3311.component';

describe('TestComponent3311Component', () => {
  let component: TestComponent3311Component;
  let fixture: ComponentFixture<TestComponent3311Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3311Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
