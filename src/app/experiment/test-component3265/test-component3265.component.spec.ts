import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3265Component } from './test-component3265.component';

describe('TestComponent3265Component', () => {
  let component: TestComponent3265Component;
  let fixture: ComponentFixture<TestComponent3265Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3265Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3265Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
