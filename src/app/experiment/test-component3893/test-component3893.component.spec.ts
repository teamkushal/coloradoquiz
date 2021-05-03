import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3893Component } from './test-component3893.component';

describe('TestComponent3893Component', () => {
  let component: TestComponent3893Component;
  let fixture: ComponentFixture<TestComponent3893Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3893Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
