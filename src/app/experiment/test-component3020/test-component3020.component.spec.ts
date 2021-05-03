import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3020Component } from './test-component3020.component';

describe('TestComponent3020Component', () => {
  let component: TestComponent3020Component;
  let fixture: ComponentFixture<TestComponent3020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
