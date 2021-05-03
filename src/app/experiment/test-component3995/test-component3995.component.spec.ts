import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3995Component } from './test-component3995.component';

describe('TestComponent3995Component', () => {
  let component: TestComponent3995Component;
  let fixture: ComponentFixture<TestComponent3995Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3995Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
