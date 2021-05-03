import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent361Component } from './test-component361.component';

describe('TestComponent361Component', () => {
  let component: TestComponent361Component;
  let fixture: ComponentFixture<TestComponent361Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent361Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
