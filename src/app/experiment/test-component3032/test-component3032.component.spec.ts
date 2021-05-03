import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3032Component } from './test-component3032.component';

describe('TestComponent3032Component', () => {
  let component: TestComponent3032Component;
  let fixture: ComponentFixture<TestComponent3032Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3032Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
