import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3203Component } from './test-component3203.component';

describe('TestComponent3203Component', () => {
  let component: TestComponent3203Component;
  let fixture: ComponentFixture<TestComponent3203Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3203Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
