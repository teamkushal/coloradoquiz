import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3486Component } from './test-component3486.component';

describe('TestComponent3486Component', () => {
  let component: TestComponent3486Component;
  let fixture: ComponentFixture<TestComponent3486Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3486Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
