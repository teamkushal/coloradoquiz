import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3996Component } from './test-component3996.component';

describe('TestComponent3996Component', () => {
  let component: TestComponent3996Component;
  let fixture: ComponentFixture<TestComponent3996Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3996Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
