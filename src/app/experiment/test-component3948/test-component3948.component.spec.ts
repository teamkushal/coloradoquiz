import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3948Component } from './test-component3948.component';

describe('TestComponent3948Component', () => {
  let component: TestComponent3948Component;
  let fixture: ComponentFixture<TestComponent3948Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3948Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
