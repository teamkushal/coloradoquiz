import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3976Component } from './test-component3976.component';

describe('TestComponent3976Component', () => {
  let component: TestComponent3976Component;
  let fixture: ComponentFixture<TestComponent3976Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3976Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
